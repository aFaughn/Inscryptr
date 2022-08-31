function HandleCostType({card}) {
    if (card.costType === 'blood') {
        return (<p>{'🩸'.repeat(card.cost)}</p>)
    }
    else if (card.costType === 'bones') {
        return (<p>{'🦴'.repeat(card.cost)}</p>)
    }
    else if (card.costType === 'energy') {
        return (<p>{'⚡'.repeat(card.cost)}</p>)
    }
    else return (
        <p>Somehow you managed to not define a cost type?</p>
    )
}

export default HandleCostType;
