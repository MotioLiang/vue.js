import { Loading } from 'element-ui'
let loadingCount = 0
let loading = null

function showLoading() {
    loading = Loading.service({
        lock: true,
        background: 'rgba(255, 255, 255, 0.3)'
    })
}

function closeLoading() {
    loading.close()
    loading = null
}

export function showFullScreenLoading() {
    if (loadingCount === 0 && !loading) {
        showLoading()
    }
    loadingCount++
}

export function hideFullScreenLoading() {
    if (loading) {
        closeLoading()
        loadingCount = 0
    }
}
