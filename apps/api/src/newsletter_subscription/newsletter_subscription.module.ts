import { Module } from '@nestjs/common';
import { NewsletterSubscriptionController } from './newsletter_subscription.controller';
import { NewsletterSubscriptionService } from './newsletter_subscription.service';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [NewsletterSubscriptionController],
  providers: [NewsletterSubscriptionService],
  exports: [NewsletterSubscriptionService],
})
export class NewsletterSubscriptionModule {}
