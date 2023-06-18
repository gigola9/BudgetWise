import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectCommentsLoaded } from 'src/app/features/comments/store';
import { selectLoadPostsLoaded } from 'src/app/features/posts/store/selectors';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject<void>();

  constructor(private store: Store, private messageService: MessageService) { }

  ngOnInit(): void {
    this.store.pipe(select(selectLoadPostsLoaded), takeUntil(this.destroyed$)).subscribe((success) => {
      if(success) {
        this.messageDate('პოსტები წარმატებით ჩაიტვირთა');
      }
    });
    this.store.pipe(select(selectCommentsLoaded), takeUntil(this.destroyed$)).subscribe((success) => {
      if(success) {
        this.messageDate('კომენტარები წარმატებით ჩაიტვირთა', 5000);
      }
    });
  }

  messageDate(text: string, time = 2000) {
    this.messageService.add({
      key: 'custom',
      severity: 'info',
      life: time,
      detail: text
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.destroyed$.unsubscribe();
  }

}
