import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import useNews from '../hooks/useNews'

const CATEGORIES = [
    { value: 'news', label: 'News' },
    { value: 'sport', label: 'Sport' },
    { value: 'tech', label: 'Technology' },
    { value: 'world', label: 'World' },
    { value: 'finance', label: 'Finance' },
    { value: 'politics', label: 'Politics' },
    { value: 'business', label: 'Business' },
    { value: 'economics', label: 'Economics' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'beauty', label: 'Beauty' },
    { value: 'travel', label: 'Travel' },
    { value: 'music', label: 'Music' },
    { value: 'food', label: 'Food' },
    { value: 'science', label: 'Science' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'energy', label: 'Energy' }
];


const Form = () => {

    const { category, handleChangeCategory} = useNews()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                    label="Category"
                    onChange={handleChangeCategory}
                    value={category}
                >
                    {CATEGORIES.map(category => (
                        <MenuItem 
                            key={category.value} 
                            value={category.value}
                        >
                            {category.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    )
}

export default Form