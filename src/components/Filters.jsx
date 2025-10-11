export default function Filter() {

    return (
    <div className="filters">
                    <select className="filter-class">
                        <option value="CLASS">CLASS</option>
                        <option>Saber</option>
                        <option>Archer</option>
                        <option>Lancer</option>
                        <option>Rider</option>
                        <option>Caster</option>
                        <option>Assassin</option>
                        <option>Berserker</option>
                    </select>
                    <select className="filter-class">
                        <option>RARITY</option>
                        <option>★</option>
                        <option>★★</option>
                        <option>★★★</option>
                        <option>★★★★</option>
                        <option>★★★★★</option>
                    </select>
                    <select className="filter-class">
                        <option>CARD TYPE</option>
                        <option>Quick</option>
                        <option>Arts</option>
                        <option>Buster</option>
                    </select>
                    <select className="filter-class">
                        <option>NP TYPE</option>
                        <option>Single Target</option>
                        <option>AOE</option>
                        <option>Support</option>
                    </select>
                    <select className="filter-class">
                        <option>YEAR</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                    </select>
                    <select className="filter-class">
                        <option>OTHER</option>
                        <option>Anniversary</option>
                        <option>New Years</option>
                        <option>Summer</option>
                        <option>Collab</option>
                    </select>
                </div>
    )
}