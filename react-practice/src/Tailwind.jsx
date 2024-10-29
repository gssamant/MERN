import './index.css'
import Card from './Components/Card'
function Tailwind() {
	return (
		<>
		<h1 className="bg-green-300 text-white p-4 font-bold underline mb-5">
      	Hello world!
			</h1>
			<Card username="gaurav" btnText="I am gaurav"></Card>
			<Card username="rajat"></Card>
		</>
	)
}
export default Tailwind