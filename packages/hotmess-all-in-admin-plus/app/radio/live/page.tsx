import dynamic from 'next/dynamic'
import AgeGate from '@/app/(shell)/components/AgeGate'
const RadioKingPlayer = dynamic(()=>import('../components/RadioKingPlayer'), { ssr:false })
export default function Live(){
  return (<main className="p-6">
    <h1 className="text-2xl font-bold">Live</h1>
    <AgeGate>
      <div className="mt-4"><RadioKingPlayer /></div>
    </AgeGate>
  </main>)
}
