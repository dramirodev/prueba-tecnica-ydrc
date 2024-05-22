import {Card} from "../components/card/card.tsx";
import {useGetPostsQuery} from "../api/post.ts";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, postsSelector, savePost} from "../store/post/reducer.ts";


export function Home() {
    const {isLoading} = useGetPostsQuery()
    const posts = useSelector(postsSelector)
    const dispatch = useDispatch()


    const handleClick = (id: number) => {
        dispatch(deletePost(id))
    }

    const handleSave = (body: string, id: number) => {
        dispatch(savePost({body, id}))
    }
    return (
        <main>
            <div className="card__container">
                {isLoading ? "Loading" : posts.map((post) => (
                    <Card post={post} onClick={handleClick} key={post.id} savePost={handleSave}/>))}
            </div>
        </main>
    )
}
