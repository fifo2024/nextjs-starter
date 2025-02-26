
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        // console.log('balance_infos', balance_infos);
        return NextResponse.json({
            total_balance: 'bal',
            currency: Math.random(),
        });
    }
    catch (error) {
        return NextResponse.json({ data: error?.toString() });
    }
};
