// decorator === HOC
import React from 'react'

export default (OriginalComponent) => class AccordionComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openChildId: null
        }
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenChild = {this.toggleOpenChild} />
    }

    toggleOpenChild = (id) => {
        if (this.memoizedTogglers.get(id)) return this.memoizedTogglers.get(id)

        const func = (ev) => this.setState({
            openChildId: id === this.state.openChildId ? null : id
        })

        this.memoizedTogglers.set(id, func)

        return func
    }

    memoizedTogglers = new Map()

}