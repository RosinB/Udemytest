function ProfileCard({ title, username, image, descripition }) {

    return <div className="card">
        {/* card 是 Bulma 中用來建立卡片樣式的類，這裡的 div 包裝了整個卡片的結構。 */}
        <div className="card-image">
            {/* card-image 是 Bulma 用來顯示卡片圖片的容器類，它將圖片與卡片內容分開。 */}
            <figure className="image is-1by1">
                {/* 這是 Bulma 中專門用來處理圖片的類，確保圖片在父容器中以適當的比例顯示。
                    is-1by1：這是一個比例類，表示圖片將保持 1:1 的正方形比例。 */}
                <img src={image} alt="圖片" />
            </figure>
        </div>

        <div className="card-content">
            {/*  Bulma 中用來展示卡片主體內容的容器類，它包含標題、用戶名和描述。 */}
            <div className="media-content">
                {/*  Bulma 用來表示媒體對象（如圖片旁邊的文本）的容器類 */}
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6"> {username}</p>
            </div>
            <div className="content">
                {/* content：這個類用於標準的文本樣式，這裡用來展示 descripition（描述）。
 */}
                {descripition}
            </div>
        </div>



    </div>




}

export default ProfileCard;