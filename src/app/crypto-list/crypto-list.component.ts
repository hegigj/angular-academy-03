import { Component } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent {
  constructor(public cryptoService: CryptoService) {
    // cryptoService.action.subscribe((a) => console.log(a));
    cryptoService.action.subscribe(console.log);
  }
}
