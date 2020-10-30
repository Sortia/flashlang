<?php

/**
 * Calculate percent
 *
 * @param float $progress
 * @param float $total
 * @return float
 */
function percent(float $progress, float $total): float
{
    return ($progress / ($total == 0 ? 1: $total)) * 100;
}
