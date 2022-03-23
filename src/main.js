const customName = document.getElementById("customname")
const randomize = document.querySelector(".randomize")
const story = document.querySelector(".story")

const randomValueFromArray = array => {
	const random = Math.floor(Math.random() * array.length)
	return array[random]
}

let storyText =
	"外は華氏94度でした、なので:insertx:は散歩に出かけました。彼が:inserty:に着いたとき、彼は恐怖で震えました。それも束の間、彼は:insertz:しまいました。ボブは一部始終を見ていましたが、驚きませんでした。ちなみに:insertx:の体重は300ポンドで、とても暑い日でした。"
const insertX = ["ゴブリンのウィリー", "ビッグダディ", "クリスマス神父"]
const insertY = ["炊き出し場", "ディズニーランド", "ホワイトハウス"]
const insertZ = [
	"自然発火して燃えて",
	"歩道の水たまりに溶けて",
	"ナメクジになって這っていって",
]

randomize.addEventListener("click", () => {
	let newStory = storyText

	const xItem = randomValueFromArray(insertX)
	const yItem = randomValueFromArray(insertY)
	const zItem = randomValueFromArray(insertZ)

	newStory = newStory.replace(":insertx:", xItem)
	newStory = newStory.replace(":inserty:", yItem)
	newStory = newStory.replace(":insertz:", zItem)

	if (customName.value !== "") {
		const name = customName.value
		newStory = newStory.replace("ボブ", name)
	}

	if (document.getElementById("uk").checked) {
		const temperature = `摂氏${Math.round(((94 - 32) * 5) / 9)}`
		newStory = newStory.replace("華氏94", temperature)

		const weight = `${Math.round(300 * 0.0714286)}ストーン`
		newStory = newStory.replace("300ポンド", weight)
	}

	story.textContent = newStory
	story.style.visibility = "visible"
})
