import Image from "next/image";
import Link from "next/link";
import React from "react";
import placeholder from "../../assets/images.png";
import styles from "./CharacterCard.module.css";

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
    data: Character;
    index: number;
};

const CharacterCard = ({ data, index }: Props) => {
    return (
        <Link href={data.id} className={styles.wrapper}>
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
    );
};

export default CharacterCard;
