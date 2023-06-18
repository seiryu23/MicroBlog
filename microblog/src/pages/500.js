import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Custom500() {
    return (
        <Layout>
            <Head><title>500 Server Error</title></Head>
            <h1>サーバでエラーが発生しました。</h1>
        </Layout>
    );
}