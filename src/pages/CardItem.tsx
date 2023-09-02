import styles from '@/styles/Card.module.scss';
import Image from 'next/image';
import SvgImage from '@/UI/svg/SvgImage';
import Link from 'next/link';

export interface Icolors {
    color: string,
    name: string,
    stroke: string,
}
export interface Icard {
    name: string,
    price: string,
    description: string,
    id: number,
    link: string,
    src: string,
    colors: Icolors[],
}

export default function CardItem({card}: {card: Icard}) {
    const AddToCard = (event: React.MouseEvent) => { //стрелочная функция
        event.preventDefault();
        alert('Тут логика добавления в корзину, либо переадресация на страницу входа')
    }

    function BuyNow(event: React.MouseEvent) { //но я люблю такие, тут сразу все понятно
        event.preventDefault();
        alert('тут должна быть логика покупки, если вы не вошли то переадресовка на страницу входа.\nЕсли вошли то переход на страницу покупки')
    }

    function changeColor(event: React.MouseEvent, color: string) {
        event.preventDefault();
        alert(`тут запрос на бэк чтоб получить другую картинку \n чтоб показать как выглядят ${color} наушники`)
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
                            stroke={color.stroke}
                        />
                            
                    )
                }))}
            </div>
            <div className={styles.buttons} >
                <input 
                    onClick={(event) => {
                        AddToCard(event);
                    }} 
                    id={styles.BtnSpecial} 
                    className={styles.button} 
                    type='button' 
                    value='Add to cart'
                />
                <input onClick={(event) => {
                        BuyNow(event);
                    }}
                    className={styles.button} 
                    type='button' 
                    value='Buy now'
                />
            </div>
            <Link href={card.link}>
                Read reviews
            </Link>
        </div>
    )
}

