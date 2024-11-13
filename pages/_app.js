import '../components/global.css'; // グローバルCSSをインポート

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp; 