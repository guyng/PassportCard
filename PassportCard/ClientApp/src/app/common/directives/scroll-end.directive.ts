import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/store/post.reducer';
import { getMaxPostsLoaded } from 'src/app/store/post.selectors';

@Directive({
  selector: '[scrollEnd]'
})
export class ScrollEndDirective {
    maxPostsLoaded: boolean;

    constructor(private _store: Store<PostState>){
        this._store.select(getMaxPostsLoaded).subscribe(maxPostsLoaded => {
            this.maxPostsLoaded = maxPostsLoaded;
        })
    }
  @Output() scrollEnd = new EventEmitter<void>();

  emitted = false;

  @HostListener("window:scroll", ['$event'])
  onScroll(event:any): void {
      console.log(event);
      debugger;

    //   if (document.body.offsetHeight + document.body.scrollTop >= (document.body.scrollHeight * 90/100)) {
    //     this.scrollEnd.emit();
    // }
      
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.maxPostsLoaded) {
      this.emitted = true;
      this.scrollEnd.emit();
    }
  }
}