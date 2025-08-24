const getServerSideProps = async () => {
    const data = await fetch("url");
    const json = await data.json() as { status: "success" | "failed"; message: string };

    return {
        props: {
            json,
        },
    };
};

type InferPropsFromServerSideFunction<T> = T extends () => Promise<{ props: { json: infer JSONType } }> ? JSONType
    : never;

type A = InferPropsFromServerSideFunction<typeof getServerSideProps>;
