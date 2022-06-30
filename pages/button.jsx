import { Button } from '../components/button'

export default function ButtonPage() {
  return (
    <div className="p-10">
      <div className="flex flex-wrap items-center gap-4">
        <Button>Confirm booking</Button>
        <Button look="secondary">Confirm booking</Button>
        <Button look="secondary" size="small">
          Confirm booking
        </Button>
        <Button disabled>Disabled button</Button>
        <Button disabled look="secondary">
          Disabled button
        </Button>
        <Button disabled size="small">
          Disabled small
        </Button>
        <Button>Without icon</Button>
        <Button look="secondary">Without icon</Button>
        <Button look="secondary" size="small">
          Without icon
        </Button>
      </div>
    </div>
  )
}
