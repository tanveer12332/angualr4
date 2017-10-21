import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
@Input('like-count') isLikeCount;
@Input('is-Active') isLike;
@Output('change') change = new EventEmitter();
  onClick(){
    this.isLike = !this.isLike;
    var like =  this.isLikeCount > 0 ? this.isLikeCount-- : this.isLikeCount++;
    this.change.emit(like);
  }
}
