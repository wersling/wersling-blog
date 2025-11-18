import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    try {
        const manifestPath = path.join(process.cwd(), 'public', 'static', 'favicons', 'site.webmanifest')
        const manifest = fs.readFileSync(manifestPath, 'utf8')
        
        return new NextResponse(manifest, {
            headers: {
                'Content-Type': 'application/manifest+json',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        })
    } catch (error) {
        return new NextResponse('Manifest not found', { status: 404 })
    }
}

