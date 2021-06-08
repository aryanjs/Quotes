const domain = process.env.REACT_APP_URL

export const getAllQuotes = async () => {
    const response = await fetch(`${domain}/quotes.json`)
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.')
    }

    const transformedQuotes = []

    for (const key in data) {
        const quoteObj = {
            id: key,
            ...data[key]
        }

        transformedQuotes.push(quoteObj)
    }

    return transformedQuotes
}

export const getSingleQuote = async (quoteId) => {
    const response = await fetch(`${domain}/quotes/${quoteId}.json`)
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quote.')
    }

    const loadedQuote = {
        id: quoteId,
        ...data
    }

    return loadedQuote
}

export const addQuote = async (quoteData) => {
    const response = await fetch(`${domain}/quotes.json`, {
        method: 'POST',
        body: JSON.stringify(quoteData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Could not create quote.')
    }

    return null
}

export const addComment = async ({ quoteId, commentData }) => {
    const response = await fetch(`${domain}/comments/${quoteId}.json`, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Could not add comment.')
    }

    return { commentId: data.name }
}

export const getAllComments = async (quoteId) => {
    const response = await fetch(`${domain}/comments/${quoteId}.json`)

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Could not get comments.')
    }

    const transformedComments = []

    for (const key in data) {
        const commentObj = {
            id: key,
            ...data[key]
        }

        transformedComments.push(commentObj)
    }

    return transformedComments
}
