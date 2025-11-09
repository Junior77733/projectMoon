import { lazy, Suspense } from "react"

export default function AllStoryArcs() {

    const MainArcOne = lazy(() => import('./MainArcOne'))
    const MainArcTwo = lazy(() => import('./MainArcTwo'))
    const SubArcOne = lazy(() => import('./SubArcOne'))
    const SubArcTwo = lazy(() => import('./SubArcTwo'))
    
    return (
        <div className="story-chapter-parent-container">

            <Suspense fallback={<p>LOADING...</p>}>
                <MainArcOne />
            </Suspense>
            <Suspense fallback={<p>LOADING...</p>}>
                <SubArcOne />
            </Suspense>
            <Suspense fallback={<p>LOADING...</p>}>
                <MainArcTwo />
            </Suspense>
            <Suspense fallback={<p>LOADING...</p>}>
                <SubArcTwo />
            </Suspense>
        </div>
    )
    
}