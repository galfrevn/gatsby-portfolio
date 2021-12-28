import React from "react";
import Layout from "components/Layout";
import Button from "components/_ui/Button";

const NotFoundPage = () => (
    <Layout>
        <h1>
            Oops! We couldn't find this page.
        </h1>
        <p>
            If you are reading this, it's because you are lost. Greatings from Argentina.
        </p>


        <a href="/" >
            <Button>
                Go home
            </Button>
        </a>

    </Layout>
)

export default NotFoundPage;