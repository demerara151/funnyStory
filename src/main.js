const customName = document.getElementById("customname")
const randomize = document.querySelector(".randomize")
const story = document.querySelector(".story")

const randomValue = array => {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}

const storyText =
  "その日は華氏94度でした。:person:はマッチングアプリで知り合った相手に会うため、ウキウキで家を出ました。しばらくして待ち合わせ場所の:place:に着いたとき、急に寒気を感じました。それも束の間、:event:しまいました。デヴィ夫人は一部始終を見ていましたが、「あらぁ」と一言つぶやくだけで特に驚いた様子はありませんでした。ちなみに:person:の体重は300ポンドで、キャンキャンの専属モデルでした。"
const persons = [
  "ゴブリンのまさお",
  "地獄の皇太子",
  "花澤香菜の唾液になりたい"
]
const places = ["炊き出し場", "カルビーお客様相談室", "ホワイトハウス"]
const events = [
  "青い炎に包まれ灰になって",
  "道端の水たまりに溶けて消えさって",
  "ナメクジになって這っていって"
]

randomize.addEventListener("click", () => {
  let newStory = storyText

  newStory = newStory.replace(/:person:/g, randomValue(persons))
  newStory = newStory.replace(":place:", randomValue(places))
  newStory = newStory.replace(":event:", randomValue(events))

  if (customName.value !== "") {
    const name = customName.value
    newStory = newStory.replace("デヴィ夫人", name)
  }

  if (document.getElementById("jp").checked) {
    const temperature = `摂氏${Math.round(((94 - 32) * 5) / 9)}`
    newStory = newStory.replace("華氏94", temperature)

    const weight = `${Math.round(300 / 2.2046)}キロ`
    newStory = newStory.replace("300ポンド", weight)
  }

  story.textContent = newStory
  story.style.visibility = "visible"
})
