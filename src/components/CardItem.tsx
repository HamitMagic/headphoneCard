import styles from '@/styles/Card.module.scss';
import Image from 'next/image';
import SvgImage from '@/UI/svg/SvgImage';
import Link from 'next/link';
import { useState } from 'react';
import Icard from './cardInterface';


export default function CardItem({card}: {card: Icard}) {
    const [selected, setSelected] = useState(card.colors[0].name)

    const addToCard = (event: React.MouseEvent) => { //стрелочная функция 
        event.preventDefault();
        alert('Тут логика добавления в корзину, либо переадресация на страницу входа')
    }

    function buyNow(event: React.MouseEvent) { //но я люблю такие, тут сразу все понятно
        event.preventDefault();
        alert('тут должна быть логика покупки, если вы не вошли то переадресовка на страницу входа.\nЕсли вошли то переход на страницу покупки')
    }

    function changeColor(event: React.MouseEvent, color: string) {
        event.preventDefault();
        if (color === selected) return null;
        setSelected(color)
        console.log(`тут запрос на бэк чтоб получить другую картинку \n чтоб показать как выглядят ${color} наушники`)
    }
    
    return (
        <div className={styles.main}>
            <div className={styles.image} >
                <Image
                    alt={card.name}
                    src={card.src}
                    width='258'
                    height='258'
                />
            </div>
            <div className={styles.price}>
                {card.price}
            </div>
            <div className={styles.name}>
                {card.name}
            </div>
            <div className={styles.description}>
                {card.description}
            </div>
            <div className={styles.colorSelect} >
                Choose your color
            </div>
            <div className={styles.colors}>
                {card.colors.map((color => {
                    return (
                        <SvgImage
                            callback={changeColor}
                            key={color.color}
                            alt={color.name}
                            fill={color.color}
                            selected={selected}
                        />
                            
                    )
                }))}
            </div>
            <div className={styles.buttons} >
                <button onClick={addToCard} id={styles.BtnSpecial} className={styles.button} >
                    Add to cart
                </button>
                <button onClick={buyNow} className={styles.button} >
                    Buy now
                </button>
            </div>
            <Link href={card.link}>
                Read reviews
            </Link>
        </div>
    )
}