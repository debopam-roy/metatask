import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { NewsletterSubscriptionService } from './newsletter_subscription.service';
import { NewsletterSubscriptionDto } from './dto/newsletter-subscription.dto';

@Controller('newsletter-subscription')
export class NewsletterSubscriptionController {
  constructor(
    private readonly newsletterSubscriptionService: NewsletterSubscriptionService,
  ) {}

  @Post('subscribe')
  @HttpCode(HttpStatus.OK)
  async subscribe(@Body() subscriptionDto: NewsletterSubscriptionDto) {
    return this.newsletterSubscriptionService.subscribe(subscriptionDto.email);
  }
}
