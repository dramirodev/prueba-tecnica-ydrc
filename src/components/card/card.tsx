import {Post} from "../../store/post/reducer.ts";
import './card-styles.css'

import Close from '../../assets/icons/close.svg'
import {ChangeEvent, useState} from "react";

type CardProps = {
    post: Post,
    onClick: (id: number) => void
    savePost: (body: string, id: number) => void
}


export function Card({post, onClick, savePost}: Readonly<CardProps>) {

    const [edit, setEdit] = useState(true);
    const [body, setBody] = useState(post.body);

    const handleClick = () => {
        onClick(post.id);
    }

    const handleEdit = () => {
        setEdit(!edit);

        if (edit) {
            savePost(body, post.id);
        }
    }

    const handleOnchage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }
    return (
        <div className="card">
            <div className="card__close">
                <img className={"card__close__img"} src={Close} alt="close" onClick={handleClick}/>
            </div>
            <div className="card__header">
                <h1 className="card__header__title">{post.title}</h1>

            </div>
            <div className="card__description">
                <textarea className="card__description--textarea" readOnly={edit} disabled={edit}
                          onChange={handleOnchage} value={body}/>
            </div>
            <div className="card__footer">
                <p className="card__footer__description">{`User: ${post.userId}`}</p>
                <button className="card__footer__edit" onClick={handleEdit}>
                    {!edit ? "Guardar" : "Editar"}
                </button>
            </div>

        </div>
    )
}
