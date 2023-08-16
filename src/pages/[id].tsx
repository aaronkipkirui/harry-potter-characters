import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import styles from "../styles/[id].module.css";

type Character = {
    id: string;
    name: string;
    actor: string;
    ancestry: string;
    dateOfBirth: string;
    eyeColour: string;
    gender: string;
    hairColour: string;
    hogwartsStaff: boolean;
    hogwartsStudent: boolean;
    image: string;
    species: string;
    house: string;
    patronus: string;
    wizard: boolean;
    wand: {
        wood: string;
        core: string;
        length: string;
    };
};

type Props = {
    data: Character[];
};

const Individ = ({ data }: Props) => {
    const router = useRouter();
    const { id } = router.query;

    const found = data && data.find((element) => element.id === id);
    if (found === undefined) {
        return (
            <>
                <Head>
                    <title>Harry Potter</title>
                </Head>
                <Layout>
                    <h1>Not found</h1>
                </Layout>
            </>
        );
    }
    return (
        <>
            <Head>
                <title>Harry Potter {found.name}</title>
            </Head>
            <Layout>
                <div className="container">
                <div className="card">
                    <div className={styles.wrapper}>
                        <div className={styles.imagewrapper}>
                            <Image
                                src={found.image}
                                fill
                                alt={found.name}
                                priority
                            ></Image>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>Name:</span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.name !== "" ? found.name : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>Actor:</span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.actor !== "" ? found.actor : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Ancestry:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.ancestry !== ""
                                        ? found.ancestry
                                        : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Date of Birth:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.dateOfBirth !== null
                                        ? found.dateOfBirth
                                        : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Eye Colour:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.eyeColour !== ""
                                        ? found.eyeColour
                                        : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Gender:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.gender !== "" ? found.gender : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Hair Colour:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.hairColour !== ""
                                        ? found.hairColour
                                        : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Hogwarts Staff:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.hogwartsStaff ? "Yes" : "No"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Hogwarts Student:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.hogwartsStudent ? "Yes" : "No"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>House:</span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.house !== "" ? found.house : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Patronus:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.patronus !== ""
                                        ? found.patronus
                                        : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Species:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.species !== "" ? found.species : "-"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Wizard:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.wizard ? "Yes" : "Nos"}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Wand Wood:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.wand.wood === "" ||
                                    found.wand.wood === null
                                        ? "-"
                                        : found.wand.wood}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Wand Core:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.wand.core === "" ||
                                    found.wand.core === null
                                        ? "-"
                                        : found.wand.core}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Wand Length:
                                </span>{" "}
                                <span className={styles.sliceValue}>
                                    {found.wand.length === "" ||
                                    found.wand.length === null
                                        ? "-"
                                        : found.wand.length}
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Individ;

type CharactersResponseType = {
    data: Character[];
};

export async function getStaticProps() {
    const { data }: CharactersResponseType = await axios.get(
        "https://hp-api.onrender.com/api/characters"
    );
    return {
        props: { data },
    };
}
export async function getStaticPaths() {
    const { data }: CharactersResponseType = await axios.get(
        "https://hp-api.onrender.com/api/characters"
    );
    const ids = data.map((element: Character) => {
        return {
            params: { id: element.id },
        };
    });
    return {
        paths: ids,
        fallback: false,
    };
}
