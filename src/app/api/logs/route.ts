import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  // read from my combined.log files in root/logs/combined.log and return the last 100 lines as json
  const logFilePath = path.join(process.cwd(), 'logs/combined.log');
  const data = fs.readFileSync(logFilePath, 'utf8');

  // Parse each line as a JSON object and add to an array
  const logs = data
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => JSON.parse(line));

  const last100Logs = logs.slice(-100);

  return NextResponse.json({ status: 200, last100Logs });
}
