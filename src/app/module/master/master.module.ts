import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { AuthorModule } from '../author/author.module';
import { CategoryModule } from '../category/category.module';
import { LanguageModule } from '../language/language.module';
import { PublisherModule } from '../publisher/publisher.module';
import { PaymentModule } from '../payment/payment.module';
import { RackModule } from '../rack/rack.module';
import { RoleModule } from '../role/role.module';
import { UserModule } from '../user/user.module';
import { ProfileModule } from '../profile/profile.module';
import { BookModule } from '../book/book.module';
import { BookdetailModule } from '../bookdetail/bookdetail.module';
import { CustomerCshModule } from '../customer-csh/customer-csh.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    AuthorModule,
    CategoryModule,
    LanguageModule,
    PublisherModule,
    PaymentModule,
    RackModule,
    RoleModule,
    UserModule,
    ProfileModule,
    BookModule,
    BookdetailModule,
    CustomerCshModule
  ]
})
export class MasterModule { }
