import React from 'react'
import {useTranslation} from 'react-i18next'

export default function BuildingDivider() {
    const {t} = useTranslation()
    return (
        <div className="building-divider-container">
            <h3 className="building-divider-title"> {t("building.divider.title")} 🔨</h3>
        </div>
    )
}
