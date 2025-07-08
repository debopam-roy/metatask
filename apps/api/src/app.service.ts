import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getOverview(): Record<string, any> {
    return {
      name: 'MetaTask API',
      version: '1.0.0',
      description:
        'MetaTask is a decentralized task marketplace that connects clients with skilled freelancers.',
      features: [
        'Secure blockchain-based escrow system',
        'Task creation and management',
        'Freelancer discovery and hiring',
        'Secure payment processing',
        'Rating and review system',
      ],
    };
  }
}
