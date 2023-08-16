import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from 'react';
import placeholder from "../assets/images.png";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import Layout from "@/components/Layout/Layout";
import styles from "../components/CharacterCard/CharacterCard.module.css";
import Link from "next/link";



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
    index: number;
};

export default function Characters({ data, index }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        const filtered = data.filter(
            data =>
                data.name.toLowerCase().includes(query) ||
                data.house.toLowerCase().includes(query)
        );
        setFilteredCharacters(filtered);
        setSearchQuery(query);
    };
    return (
        <>
            <Head>
                <title>Harry Potter</title>
            </Head>
            <Layout>
            <div className="d-flex justify-content-end">
                    <input className="form-control m-1" type="search" placeholder="Search character by name or house"
                      value={searchQuery}
                      onChange={handleSearch}
                      style={{ width: '300px' }}
                     aria-label="Search"></input>
                </div>
                <div className={styles.main}>
                    {filteredCharacters.map(data => (
                        <Link href={data.id} key = {data.id}className={styles.wrapper}>
                        <div className={styles.imagewrapper}>
                            {data.image !== "" ? (
                                <Image
                                    src={data.image}
                                    className={styles.image}
                                    fill
                                    alt={data.name}
                                    priority={index < 6 ? true : false}
                                ></Image>
                            ) : (
                                <Image src={placeholder} fill alt={data.name} />
                            )}
                        </div>
                        {data.name !== "" ? (
                            <p className={styles.name}>
                                <span>{data.name}</span>
                            </p>
                        ) : (
                            <span className={styles.name}>-</span>
                        )}
                        {data.dateOfBirth !== "" ? (
                            <p className={styles.name}>
                                <span>{data.dateOfBirth}</span>
                            </p>
                        ) : (
                            <span className={styles.name}>-</span>
                        )}
                    </Link>
                    ))}
                </div>
                {!searchQuery && (
                    <div className={styles.main}>
                        {data &&
                            data.map((element, index) => (
                                <CharacterCard
                                    index={index}
                                    data={element}
                                    key={element.id}
                                />
                            ))}
                    </div>
                )}
            </Layout>
             
       
        </>
    );
}

type CharacterResponse = {
    data: Character[];
};

export async function getStaticProps() {
    try {
        const { data }: CharacterResponse = await axios.get(
            "https://hp-api.onrender.com/api/characters"
        );
    
        return {
            props: { data },
        };
        
    } catch (error) {
        return error;
    }
    
}
