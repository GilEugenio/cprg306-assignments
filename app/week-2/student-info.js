import Link from "next/link"

export default function StudentInfo() {
    return (
        <div>
            <h1 className="flex min-h-screen flex-col items-center justify-between p-24">Gil Eugenio</h1>
            <Link href="https://github.com/Guillermo-Eugenio/cprg306-assignments" className="flex min-h-screen flex-col items-center justify-between p-24" >Github</Link>

        </div>
    )
}