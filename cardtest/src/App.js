import ProfileCard from "./ProfileCard";
import AlexaImage from "./img/alexa.png"
import ConrtanaImage from "./img/cortana.png"
import SiriImage from "./img/siri.png"
import 'bulma/css/bulma.css'


function App() {
  return (
    <div>
      <section className="hero is-primary">
        {/* 顯示標題區域，類似於頁面的封面或頂部橫幅 is-primary：是 一個顏色修飾類*/}
        <div className="hero-body">
          {/*指定了 Hero 組件的主體內容區域，用來放置標題或其他信息。 */}
          <p className="title">Personal Digital Assistant</p>
          {/*title 類用來設置文本樣式為大標題 */}
        </div>
      </section>



      <div className="container">
        {/* 它會自動根據視窗大小調整內容的最大寬度，確保頁面內容不會太寬。 */}
        <section className="section">
          {/* section：會自動增加適當的上下間距，幫助元素之間保持合適的距離。 */}
          <div className="columns">
            {/* Bulma 的 columns 類是一個 Flexbox 佈局系統，用來建立水平排列的多列佈局。
              column is-3：而 is-3 表示這個列占用 12 列網格中的 3 列，這讓每個卡片在同一行中均勻排列。 */}
            <div className="column is-3">
              <ProfileCard 
              title="alexa" 
              username="@alexa99" 
              image={AlexaImage} 
              descripition="Alex is good"
              />

            </div>
            <div className="column is-3">
              <ProfileCard 
              title=" Conrtana " 
              username="@cortana32" 
              image={ConrtanaImage} 
              descripition="Conrtana is good"

              />

            </div>
            <div className="column is-3">
              <ProfileCard 
              title="Siri" 
              username="@siri01" 
              image={SiriImage} 
              descripition="siri is good"

              />

            </div>

          </div>

        </section>


      </div>
    </div>


  );
}

export default App;
