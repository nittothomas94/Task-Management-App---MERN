import { Skeleton, Box } from '@mui/material';

const TaskCardSkeleton = () => (
  <div className="card">
    <Skeleton variant="text" width="60%" height={30} />
    <Skeleton variant="text" width="100%" height={60} />
    <div className="card_bottom">
      <Skeleton variant="rectangular" width={80} height={30} />
      <div className="task-actions" style={{ display: 'flex', gap: '10px' }}>
        <Skeleton variant="rectangular" width={60} height={35} />
        <Skeleton variant="rectangular" width={60} height={35} />
      </div>
    </div>
  </div>
);

export default TaskCardSkeleton;
