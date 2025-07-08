import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService implements OnModuleInit {
  private supabase: SupabaseClient;
  private readonly logger = new Logger(SupabaseService.name);

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseServiceKey = this.configService.get<string>(
      'SUPABASE_SERVICE_ROLE_KEY',
    );

    if (!supabaseUrl || !supabaseServiceKey) {
      this.logger.error(
        'Missing Supabase environment variables. Please check your .env file.',
      );
      throw new Error('Missing Supabase environment variables');
    }

    try {
      this.supabase = createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
          persistSession: false,
        },
      });
      this.logger.log('Supabase client initialized successfully');
    } catch (error) {
      this.logger.error('Failed to initialize Supabase client', error);
      throw error;
    }
  }

  get client(): SupabaseClient {
    if (!this.supabase) {
      throw new Error('Supabase client not initialized');
    }
    return this.supabase;
  }

  async select(table: string, query: string = '*') {
    return this.client.from(table).select(query);
  }

  async insert(table: string, data: Record<string, any>) {
    return this.client.from(table).insert(data);
  }

  async update(
    table: string,
    data: Record<string, any>,
    match: Record<string, any>,
  ) {
    return this.client.from(table).update(data).match(match);
  }

  async delete(table: string, match: Record<string, any>) {
    return this.client.from(table).delete().match(match);
  }
}
