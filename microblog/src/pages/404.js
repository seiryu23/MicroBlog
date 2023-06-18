import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Custom404() {
    return (
        <Layout>
            <Head><title>404 Not Found</title></Head>
            <h1>404 - ページがみつかりませんでした。</h1>
        </Layout>
    );
}