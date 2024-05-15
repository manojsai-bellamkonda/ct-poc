/* eslint-disable no-unused-vars */
declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (data: string) => {}
    }
  }
}

export const handleQRScan = () => {
  if (window?.ReactNativeWebView)
    window?.ReactNativeWebView?.postMessage('OpenCamera')
  else alert('This function can be accessed only on mobile device')
}
