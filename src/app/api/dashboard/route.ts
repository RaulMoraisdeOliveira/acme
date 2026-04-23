import { NextResponse } from 'next/server';
import { getDashboardMetrics } from '@/services/DashboardServices';

export async function GET() {
  const metrics = await getDashboardMetrics();
  
  return NextResponse.json(metrics, { status: 200 });
};
