import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'VYOMA Media — Branding, Digital, Organic Growth';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#172B3A',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid frame */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: '1px solid rgba(120, 153, 176, 0.25)',
            pointerEvents: 'none',
            display: 'flex',
          }}
        />

        {/* Top Header Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Official Vyoma Monogram */}
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="22" r="11" fill="#FEB005" />
              <path
                d="M 26.5 40.5 L 50 83 L 73.5 40.5"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="13.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 32, fontWeight: 900, letterSpacing: '0.04em', color: '#F1F3F1' }}>
                vyoma
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <span style={{ width: '12px', height: '1.5px', backgroundColor: '#FEB005' }} />
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.35em', color: '#FEB005' }}>
                  MEDIA
                </span>
                <span style={{ width: '12px', height: '1.5px', backgroundColor: '#FEB005' }} />
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              border: '1px solid rgba(120, 153, 176, 0.4)',
              borderRadius: '9999px',
              color: '#7899B0',
              fontSize: 14,
              letterSpacing: '0.15em',
            }}
          >
            HYDERABAD, INDIA
          </div>
        </div>

        {/* Center / Hero Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', fontSize: 16, letterSpacing: '0.3em', color: '#FEB005', fontWeight: 700 }}>
            BRANDING · DIGITAL · ORGANIC GROWTH
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#F1F3F1',
              letterSpacing: '-0.02em',
              maxWidth: '960px',
            }}
          >
            <span>GROWTH YOU OWN.</span>
            <span>NOT GROWTH YOU RENT.</span>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(120, 153, 176, 0.3)',
            paddingTop: '24px',
          }}
        >
          <span style={{ fontSize: 18, color: '#DCE6EB' }}>
            We build brands, digital experiences and organic visibility that create lasting commercial value.
          </span>
          <span style={{ fontSize: 14, letterSpacing: '0.15em', color: '#7899B0' }}>
            vyomamedia.co.in
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}