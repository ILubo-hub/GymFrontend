import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentUser: UsuarioLogin;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // tslint:disable-next-line: max-line-length
  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['usuario/login']);
  }

  actualizarApp(id: number) {
    this.router.navigate(['/usuario/update', id], {
      relativeTo: this.route
    });
  }
}
