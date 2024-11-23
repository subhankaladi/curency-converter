import React from 'react';


const Stock = () => {
  return (
    <div style={{height:'70vh'}}>
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', flexWrap: 'wrap'}}>
      <div style={{ width: '300px', height: '400px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <h3 style={{ textAlign: 'center' }}>AUD/USD</h3>
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_c4d32&symbol=FX:AUDUSD&interval=15&hidesidebar=1&saveimage=1&toolbarbg=F1F3F6&theme=light&style=1&timezone=Etc%2FUTC"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>

      {/* EUR/USD Chart Card */}
      <div style={{ width: '300px', height: '400px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <h3 style={{ textAlign: 'center' }}>EUR/USD</h3>
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_12345&symbol=FX:EURUSD&interval=15&hidesidebar=1&saveimage=1&toolbarbg=F1F3F6&theme=light&style=1&timezone=Etc%2FUTC"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>

      {/* GBP/USD Chart Card */}
      <div style={{ width: '300px', height: '400px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <h3 style={{ textAlign: 'center' }}>GBP/USD</h3>
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_67890&symbol=FX:GBPUSD&interval=15&hidesidebar=1&saveimage=1&toolbarbg=F1F3F6&theme=light&style=1&timezone=Etc%2FUTC"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default Stock;
