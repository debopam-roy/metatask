import {
  Injectable,
  Logger,
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class NewsletterSubscriptionService {
  private readonly logger = new Logger(NewsletterSubscriptionService.name);

  constructor(private readonly supabaseService: SupabaseService) {}

  async subscribe(email: string) {
    try {
      // Validate email format
      if (!this.isValidEmail(email)) {
        throw new BadRequestException('Invalid email format');
      }

      // Check if email already exists
      const { data: existingSubscribers } = await this.supabaseService.client
        .from('newsletter_subscribers')
        .select('id')
        .eq('email_address', email);

      if (existingSubscribers && existingSubscribers.length > 0) {
        throw new ConflictException({
          success: false,
          message: 'Email is already subscribed',
          email,
        });
      }

      // Insert new subscriber
      const { error } = await this.supabaseService.client
        .from('newsletter_subscribers')
        .insert({
          email_address: email,
          is_subscribed: true,
        });

      if (error) {
        this.logger.error('Failed to subscribe email', error);
        throw new InternalServerErrorException({
          success: false,
          message: 'Subscription failed',
        });
      }

      return {
        success: true,
        message: 'Newsletter subscription successful',
        email,
      };
    } catch (error) {
      this.logger.error('Error in newsletter subscription', error);
      if (
        error instanceof BadRequestException ||
        error instanceof ConflictException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }
      throw new InternalServerErrorException({
        success: false,
        message: 'An error occurred during subscription',
      });
    }
  }

  private isValidEmail(email: string): boolean {
    // More comprehensive email validation regex
    // This checks for proper format including TLD requirements and special character handling
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
}
