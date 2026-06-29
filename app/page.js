export default function Home() {
  const الاسعار = [
    { item: "تصميم لوقو", price: "60$" },
    { item: "تصميم بوست انستا", price: "25$" },
    { item: "تصميم غلاف فيس", price: "40$" },
    { item: "تصميم منيو مطعم", price: "120$" },
  ];

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">اسعار جد</h1>
      <div className="grid gap-3">
        {الاسعار.map((سعر, i) => (
          <div key={i} className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
            <span className="text-lg">{سعر.item}</span>
            <span className="font-bold text-xl text-blue-400">{سعر.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
