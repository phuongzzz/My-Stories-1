import { Component, OnInit } from '@angular/core';
import { MdGridListModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [MdGridListModule, MdToolbarModule]
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router) { }

  categories = [
    {id:1, imgUrl:'https://uphinhnhanh.com/images/2017/07/31/HOT.png'},
    {id:2, imgUrl:'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/20376139_1931421010403060_337428892252798213_n.jpg?oh=6e2e6c14d82702f6c379170f34a504c9&oe=5A30157C'},
    {id:3, imgUrl:'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/20375983_1931420973736397_7698949539318644131_n.jpg?oh=24480e32e4552cc82b0412942116d8b7&oe=5A33376F'},
    {id:4, imgUrl:'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/20429651_1931420947069733_4541044646218973445_n.jpg?oh=9cb4b79055f7f59ab8bf49fcccda9725&oe=5A33B46A'},
    {id:5, imgUrl:'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-0/p160x160/20479472_1931420963736398_2473042558484800182_n.jpg?oh=e04b50c00628e25c1ed251314a2bbe1a&oe=59F3168A'},
    {id:6, imgUrl:'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-0/p160x160/20431754_1931420967069731_8813582066177166405_n.jpg?oh=ec4cf7a7eb015ac273b11dc641251f3d&oe=5A313568'},
  ];

  ngOnInit() {
  }

  onClickCategory(name: string){
    this.router.navigate(['/' + name]);
  }
}
