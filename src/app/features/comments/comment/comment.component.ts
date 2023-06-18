import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';
import { CommentsModel } from '../models/Comments';
import { DataService } from '../services/data.service';
import { loadComment, selectComments } from '../store';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  products2: Product[];

  statuses: SelectItem[];

  comments$: Observable<CommentsModel[]>;

  selectedProduct1: Product;

  selectedProduct7: Product;

  showInput = false;

  dropDownn = '';

  clonedProducts: { [s: string]: Product } = {};

  sss = 'single';

  constructor(
    private store: Store,
    private breadcrumbService: BreadcrumbService,
    private dataService: DataService
  ) {}

  changeEdit() {
    this.showInput = !this.showInput;
    console.log('change');

  }

  chngg(e) {
    console.log(e);
    this.showInput = !this.showInput;
    this.statuses.push( { label: e, value: e })
  }

  ngOnInit(): void {
    this.breadcrumbService.setItems([
      { label: 'მთავარი' },
      { label: 'კომენტარები', routerLink: ['comments'] },
    ]);

    this.products2 = this.dataService.getData();

    this.statuses = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' },
    ];

    // this.store.dispatch(loadComment());

    // this.comments$ = this.store.pipe(select(selectComments));
  }

  onRowSelect(e) {
    console.log('event');

  }

  onRowEditInit(product: Product) {
    this.sss = 'none';
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: Product) {
    this.sss = 'single';
    if (product.price > 0) {
      delete this.clonedProducts[product.id];

    } else {
      console.log('Error');
    }
  }

  onRowEditCancel(product: Product, index: number) {
    this.sss = 'single';
    this.products2[index] = this.clonedProducts[product.id];
    delete this.products2[product.id];
  }
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
