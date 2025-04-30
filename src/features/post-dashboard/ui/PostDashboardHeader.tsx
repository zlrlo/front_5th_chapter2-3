import { Plus } from "lucide-react"
import { Button, CardHeader, CardTitle } from "@/shared/ui"
import { useState } from "react"
import { AddDialog } from "./AddDialog"

export function PostDashboardHeader() {
  const [showAddDialog, setShowAddDialog] = useState(false)

  const handleAddDialogOpenChange = (open: boolean) => {
    setShowAddDialog(open)
  }

  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>게시물 관리자</span>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="w-4 h-4 mr-2" />
          게시물 추가
        </Button>
        <AddDialog open={showAddDialog} onOpenChange={handleAddDialogOpenChange} />
      </CardTitle>
    </CardHeader>
  )
}
